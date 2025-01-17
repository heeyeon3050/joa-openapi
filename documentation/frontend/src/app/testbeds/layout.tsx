"use client";

import tw from "tailwind-styled-components";

export default function Joa({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <DemoContainer>
        <MainContainer>{children}</MainContainer>
      </DemoContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
h-full
w-full`;

const DemoContainer = tw.div`
h-full
w-full`;

const MainContainer = tw.div`
flex
mx-2.5  
my-4
transition-all 
md:pr-2
xl:mx-[240px]`;
