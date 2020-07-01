import React, { PropsWithChildren, lazy, Component, Suspense } from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const AccordionComponents = {
    h2: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItemHeading>
            <AccordionItemButton>
                <h2>{children}</h2>
            </AccordionItemButton>
        </AccordionItemHeading>
    ),
    p: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItemPanel>
            <p>{children}</p>
        </AccordionItemPanel>
    ),
    blockQuote: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItem>
            {children}
        </AccordionItem>
    )
}
const AccordionLayout = ({ children }: PropsWithChildren<{}>) => (
    <MDXProvider components={AccordionComponents}>{children}</MDXProvider>
)