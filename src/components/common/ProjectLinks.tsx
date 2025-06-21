'use client';

import { Button, Link, Flex, Badge } from "@radix-ui/themes";
import { GitHubLogoIcon, ExternalLinkIcon } from '@radix-ui/react-icons';
import React from 'react';

interface ProjectLinksProps {
  githubUrl?: string;
  demoUrl?: string;
  isPrivate?: boolean;
  showPrivateBadge?: boolean;
  size?: '1' | '2' | '3';
  variant?: 'solid' | 'soft' | 'outline' | 'ghost';
  className?: string;
}

export default function ProjectLinks({
  githubUrl,
  demoUrl,
  isPrivate = false,
  showPrivateBadge = true,
  size = '1',
  variant = 'soft',
  className = '',
}: ProjectLinksProps) {
  // If the project is private, don't render links
  if (isPrivate) {
    return (
      <Flex gap="3" className={className}>
        {showPrivateBadge && (
          <Badge size={size} color="gray" radius="full">
            Private Project
          </Badge>
        )}
      </Flex>
    );
  }

  return (
    <Flex gap="3" className={className}>
      {demoUrl && (
        <Button variant={variant} size={size} asChild>
          <Link 
            href={demoUrl} 
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="project-link"
          >
            View Project
            <ExternalLinkIcon width={size === '1' ? '14' : '16'} height={size === '1' ? '14' : '16'} />
          </Link>
        </Button>
      )}
      
      {githubUrl && (
        <Button variant={variant === 'solid' ? 'outline' : variant} size={size} asChild>
          <Link 
            href={githubUrl} 
            target="_blank"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="project-link"
          >
            Source Code
            <GitHubLogoIcon width={size === '1' ? '14' : '16'} height={size === '1' ? '14' : '16'} />
          </Link>
        </Button>
      )}
    </Flex>
  );
}
