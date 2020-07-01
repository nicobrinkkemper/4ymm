import React, { PropsWithChildren } from 'react';
import { MDXProvider } from '@mdx-js/react';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
export const accordionComponents = {
    h2: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItemHeading>
            <AccordionItemButton>
                <h2>{children}</h2>
            </AccordionItemButton>
        </AccordionItemHeading>
    ),
    hr: ()=>null,
    p: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItemPanel>
            <p>{children}</p>
        </AccordionItemPanel>
    ),
    blockquote: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItem>
            {children}
        </AccordionItem>
    )
}
const AccordionLayout = ({ children }: PropsWithChildren<{}>) => (
    <Accordion preExpanded={[0]} allowZeroExpanded={false}>{children}</Accordion>
)
export default AccordionLayout