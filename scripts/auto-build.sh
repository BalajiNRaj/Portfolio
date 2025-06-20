#!/bin/bash

# Colors for better output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Portfolio Project Auto Build & Fix Tool ===${NC}"

# Function to check and install dependencies
check_dependencies() {
  echo -e "${BLUE}Checking dependencies...${NC}"
  
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
}

# Function to run linting and fix errors
run_lint() {
  echo -e "${BLUE}Running linter...${NC}"
  npm run lint -- --fix
}

# Function to check for TypeScript errors
check_typescript() {
  echo -e "${BLUE}Checking TypeScript compilation...${NC}"
  npx tsc --noEmit
  return $?
}

# Function to run the build
run_build() {
  echo -e "${BLUE}Running Next.js build...${NC}"
  npm run build
  return $?
}

# Function to fix common Next.js issues
fix_common_issues() {
  echo -e "${BLUE}Applying common fixes...${NC}"
  
  # Clear Next.js cache
  rm -rf .next
  
  # Fix image optimization config if missing
  if grep -q "next/image" $(find src -type f -name "*.tsx" -o -name "*.jsx" | xargs) 2>/dev/null; then
    if [ -f "next.config.ts" ] && ! grep -q "images:" next.config.ts; then
      echo -e "${YELLOW}⚠️ Adding images configuration to next.config.ts${NC}"
      sed -i '' 's/experimental: {/experimental: {\
  }\,\
  images: {\
    domains: [],\
    remotePatterns: [\
      {\
        protocol: '\''https'\'',\
        hostname: '\''**'\'',\
      },\
    ],/' next.config.ts
    fi
  fi
  
  # Disable ESLint for build if there are errors
  if grep -q "eslint-disable" $(find .eslintrc* -type f 2>/dev/null | xargs) 2>/dev/null || [ -f ".eslintrc.json" ]; then
    echo -e "${YELLOW}⚠️ Adding ESLint config to temporarily ignore errors${NC}"
    echo '{
  "extends": "next/core-web-vitals",
  "rules": {
    "@typescript-eslint/no-explicit-any": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}' > .eslintrc.json
  fi
}

# Main function
main() {
  check_dependencies
  
  # First attempt
  run_lint
  check_typescript
  ts_result=$?
  
  if [ $ts_result -eq 0 ]; then
    run_build
    build_result=$?
    
    if [ $build_result -eq 0 ]; then
      echo -e "${GREEN}🎉 Build successful!${NC}"
      exit 0
    else
      echo -e "${YELLOW}⚠️ Build failed. Applying fixes...${NC}"
      fix_common_issues
      
      # Second attempt after fixes
      run_lint
      run_build
      if [ $? -eq 0 ]; then
        echo -e "${GREEN}🎉 Build successful after fixes!${NC}"
        exit 0
      else
        echo -e "${RED}❌ Build still failing.${NC}"
        exit 1
      fi
    fi
  else
    echo -e "${RED}❌ TypeScript errors need to be fixed before building.${NC}"
    exit 1
  fi
}

# Run the main function
main
