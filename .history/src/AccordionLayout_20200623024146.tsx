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
    h2: ({ children }: PropsWithChildren<{ key: any }>) => (
        <AccordionItemHeading>
            <AccordionItemButton>
                <h2>{children}</h2>
            </AccordionItemButton>
        </AccordionItemHeading>
    ),
    hr: () => null,
    p: ({ children }: PropsWithChildren<{}>) => (
        <AccordionItemPanel>
            <p>{children}</p>
        </AccordionItemPanel>
    ),
    blockquote: function(uuid){
        return (props: PropsWithChildren<{ key: any }>) => {
            return (
                <AccordionItem uuid={uuid++}>
                    {props.children}
                </AccordionItem>
            )
        }
    }(0)
}
const AccordionLayout = ({ children }: PropsWithChildren<{}>) => (
    <Accordion preExpanded={[0]}>{children}</Accordion>
)
export default AccordionLayout