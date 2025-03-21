'use client'

import { Card, CardFooter } from '@heroui/react';
import { ModalMain } from '../modalMain/ModalMain';
import { useState } from 'react';

const CardSecond = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

		const toggleModal = () => {
			setIsOpen((prev) => !prev);
		}
	return (
    <>
      <Card
        isPressable
        onPress={toggleModal}
        isFooterBlurred
        className="border-none rounded-2xl bg-violet-300 min-h-[200px]"
        radius="lg"
      >
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
        </CardFooter>
      </Card>
      <ModalMain
        isOpen={isOpen}
        onOpenChange={() => setIsOpen((prev) => !prev)}
      />
    </>
  );
}

export {CardSecond};