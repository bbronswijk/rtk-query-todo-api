'use client';

import DarkModeToggle from '@/ui/dark-mode-toggle';
import CreateForm from '@/ui/create-form';
import TodoList from '@/ui/todo-list';
import Footer from '@/ui/footer';
import Filter from '@/ui/filter';
import React from 'react';

export default function Home() {
  return (
    <>
      <header className='-z-10 h-72 w-full bg-[url(/images/bg-desktop-light.jpg)] bg-cover bg-center dark:bg-[url(/images/bg-desktop-dark.jpg)]' />
      <main className='relative mx-auto -mt-72 w-full max-w-[500px] px-4'>
        <h1 className='flex justify-between pb-10 pt-16 text-5xl font-bold leading-none tracking-[.25em] text-white'>
          TODO
          <DarkModeToggle />
        </h1>
        <CreateForm />

        <section className='bg-card text-card-foreground rounded-lg shadow-lg md:rounded'>
          <TodoList />
          <Footer />
        </section>

        <Filter className='bg-card mt-8 block rounded-lg px-6 py-4 text-center text-xs shadow-lg md:hidden md:rounded' />
      </main>
    </>
  );
}
