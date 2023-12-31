import React from 'react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { StickyNote } from 'lucide-react';
import { getAuthSession } from '@/lib/auth';
import { User } from 'next-auth';
import Sign2 from './Sign2';

type Props = {
  user: User | undefined;
};

const Tools = async ({ user }: Props) => {
  const session = await getAuthSession();

  return (
    <div>
      {session?.user ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="fixed text-primary hover:bg-secondary border border-primary hover:text-primary bg-secondary bottom-8 right-8 w-16 h-16 rounded-full"><StickyNote /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>AI Assistants</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link href={'/home'}>Calender</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/create'}>Create Notes</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator></DropdownMenuSeparator>
              <DropdownMenuItem>
                <Link href={'/gallery'}>Course Gallery</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href={'/dashboard'}>NoteBook Dashboard</Link>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        null
      )}
    </div>
  );
};

export default Tools;
