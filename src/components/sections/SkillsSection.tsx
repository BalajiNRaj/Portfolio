'use client';

import React, { useState } from 'react';
import SkillsDisplay from '../common/SkillsDisplay';
import { Dialog, Button, Badge, Flex, Box, ScrollArea, Text } from '@radix-ui/themes';
import { PlusIcon } from '@radix-ui/react-icons';
import { skillsData, expertiseAreas } from '@/data/skills';

export default function SkillsSection() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  // Map through the skill categories and use the featured skills for each
  const skillCategoriesWithFeatured = skillsData.map(category => ({
    title: category.title,
    skills: category.featured || category.skills.slice(0, 5), // Use featured skills or first 5
  }));

  // Function to handle opening the dialog for a specific category
  const handleOpenCategory = (categoryTitle: string) => {
    setOpenCategory(categoryTitle);
  };

  // Function to handle closing the dialog
  const handleCloseCategory = () => {
    setOpenCategory(null);
  };

  // Find the current open category
  const currentCategory = skillsData.find(category => category.title === openCategory);

  return (
    <>
      <SkillsDisplay
        skillCategories={skillCategoriesWithFeatured}
        expertiseAreas={expertiseAreas}
        showAnimations={true}
        renderSkillCategory={(category, skills) => {
          // Find the original category to get the full count
          const originalCategory = skillsData.find(c => c.title === category.title);
          const totalSkills = originalCategory?.skills.length || 0;
          const shownSkills = skills.length;
          const remainingSkills = totalSkills - shownSkills;
          
          return (
            <>
              <Flex direction="column" gap="4" p="5">
                <Flex justify="between" align="center">
                  <Text size="4" weight="bold">{category.title}</Text>
                  {remainingSkills > 0 && (
                    <Button 
                      size="1" 
                      variant="ghost" 
                      onClick={() => handleOpenCategory(category.title)}
                    >
                      <Flex align="center" gap="1">
                        <PlusIcon />
                        <Text size="1">{remainingSkills} more</Text>
                      </Flex>
                    </Button>
                  )}
                </Flex>
                <Flex wrap="wrap" gap="2">
                  {skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      size="2" 
                      color={skill.color}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '4px', 
                        padding: '5px 8px',
                      }}
                    >
                      {skill.icon}
                      {skill.name}
                    </Badge>
                  ))}
                </Flex>
              </Flex>
            </>
          );
        }}
      />

      {/* Dialog to show all skills in a category */}
      <Dialog.Root open={openCategory !== null} onOpenChange={handleCloseCategory}>
        <Dialog.Content style={{ maxWidth: 500 }}>
          <Dialog.Title>
            {currentCategory?.emoji} {currentCategory?.title}
          </Dialog.Title>
          <Dialog.Description size="2" mb="4">
            All skills and technologies in this category
          </Dialog.Description>

          <ScrollArea style={{ height: '300px' }} scrollbars="vertical">
            <Box p="2">
              <Flex wrap="wrap" gap="2">
                {currentCategory?.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    size="2" 
                    color={skill.color}
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '4px', 
                      padding: '5px 8px',
                      margin: '3px',
                    }}
                  >
                    {skill.icon}
                    {skill.name}
                  </Badge>
                ))}
              </Flex>
            </Box>
          </ScrollArea>

          <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
              <Button variant="soft">Close</Button>
            </Dialog.Close>
          </Flex>
        </Dialog.Content>
      </Dialog.Root>
    </>
  );
}
