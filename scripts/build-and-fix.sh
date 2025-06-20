#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Portfolio Project Build Helper ===${NC}"
echo -e "${BLUE}Starting build process...${NC}"

# Function to check dependencies
check_dependencies() {
  echo -e "${BLUE}Checking dependencies...${NC}"
  
  # Check if node_modules exists
  if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}⚠️ node_modules not found. Installing dependencies...${NC}"
    npm install
    if [ $? -ne 0 ]; then
      echo -e "${RED}❌ Failed to install dependencies. Trying with --legacy-peer-deps${NC}"
      npm install --legacy-peer-deps
    fi
  else
    echo -e "${GREEN}✅ node_modules found${NC}"
  fi
  
  # Check for package conflicts
  echo -e "${BLUE}Checking for package conflicts...${NC}"
  npm ls 2>&1 | grep -i "peer" > /dev/null
  if [ $? -eq 0 ]; then
    echo -e "${YELLOW}⚠️ Peer dependency conflicts found. Attempting to resolve...${NC}"
    npm install --legacy-peer-deps
  else
    echo -e "${GREEN}✅ No package conflicts detected${NC}"
  fi
}

# Function to run linting and fix errors
run_lint() {
  echo -e "${BLUE}Running linter...${NC}"
  npm run lint -- --fix
  if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️ Linting errors found, but automatic fixes were applied where possible${NC}"
  else
    echo -e "${GREEN}✅ Linting passed${NC}"
  fi
}

# Function to check for TypeScript errors
check_typescript() {
  echo -e "${BLUE}Checking TypeScript compilation...${NC}"
  npx tsc --noEmit
  if [ $? -ne 0 ]; then
    echo -e "${YELLOW}⚠️ TypeScript errors found. Please fix them manually.${NC}"
    return 1
  else
    echo -e "${GREEN}✅ TypeScript compilation passed${NC}"
    return 0
  fi
}

# Function to run the build
run_build() {
  echo -e "${BLUE}Running Next.js build...${NC}"
  npm run build
  if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Build failed${NC}"
    return 1
  else
    echo -e "${GREEN}✅ Build successful${NC}"
    return 0
  fi
}

# Function to fix common Next.js issues
fix_common_issues() {
  echo -e "${BLUE}Attempting to fix common issues...${NC}"
  
  # Fix 1: Clear Next.js cache
  echo -e "${YELLOW}Clearing Next.js cache...${NC}"
  rm -rf .next
  
  # Fix 2: Check and fix next.config.ts/js
  if [ -f "next.config.ts" ]; then
    echo -e "${BLUE}Found next.config.ts, checking for issues...${NC}"
    # Ensure it's properly exported as a module
    grep -q "export default" next.config.ts
    if [ $? -ne 0 ]; then
      echo -e "${YELLOW}⚠️ next.config.ts might be missing export default. Please check manually.${NC}"
    fi
  fi
  
  # Fix 3: Check for missing image optimization config
  if grep -q "next/image" $(find src -type f -name "*.tsx" -o -name "*.jsx" | xargs) 2>/dev/null; then
    echo -e "${BLUE}Found usage of next/image, checking configuration...${NC}"
    if [ -f "next.config.ts" ] && ! grep -q "images:" next.config.ts; then
      echo -e "${YELLOW}⚠️ You're using next/image but might be missing images configuration in next.config.ts${NC}"
    fi
  fi
  
  # Fix 4: Check for .env file if environment variables are used
  if grep -q "process.env" $(find src -type f -name "*.tsx" -o -name "*.jsx" -o -name "*.ts" -o -name "*.js" | xargs) 2>/dev/null; then
    if [ ! -f ".env" ] && [ ! -f ".env.local" ]; then
      echo -e "${YELLOW}⚠️ Environment variables are used but no .env file found${NC}"
    fi
  fi
}

# Main execution flow
main() {
  check_dependencies
  run_lint
  
  check_typescript
  ts_result=$?
  
  if [ $ts_result -eq 0 ]; then
    run_build
    build_result=$?
    
    if [ $build_result -ne 0 ]; then
      echo -e "${YELLOW}Build failed. Attempting to fix common issues...${NC}"
      fix_common_issues
      
      echo -e "${BLUE}Trying build again after fixes...${NC}"
      run_build
      if [ $? -eq 0 ]; then
        echo -e "${GREEN}🎉 Build successful after fixes!${NC}"
      else
        echo -e "${RED}❌ Build still failing. Manual intervention required.${NC}"
        echo -e "${YELLOW}Please check the error messages above for details.${NC}"
      fi
    else
      echo -e "${GREEN}🎉 First build attempt successful!${NC}"
    fi
  else
    echo -e "${YELLOW}Skipping build due to TypeScript errors.${NC}"
    echo -e "${YELLOW}Please fix TypeScript errors before building.${NC}"
  fi
}

# Run the main function
main
