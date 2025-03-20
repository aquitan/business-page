'use client';
import { Card, CardFooter } from "@heroui/react";
import { useState } from 'react';
import { ModalMain } from '..';


const CardMain = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleModal = () => {
		console.log('modal')
		setIsOpen((prev) => !prev);
	}

	return (
    <>
      <Card
				isPressable
        onPress={toggleModal}
        isFooterBlurred
        className="border-none rounded-2xl md:col-span-3 bg-slate-500"
        radius="lg"
      >
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">Available soon.</p>
        </CardFooter>
      </Card>
      <ModalMain isOpen={isOpen} onOpenChange={() => setIsOpen((prev) => !prev)} />
    </>
  );
}

export { CardMain };