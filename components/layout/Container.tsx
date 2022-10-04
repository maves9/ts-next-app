import { ReactNode, HTMLAttributes, HTMLElement, FunctionComponent } from "react";

interface CompProps extends HTMLAttributes<HTMLElement>{
  tagName?: keyof JSX.IntrinsicElements
  gap?: string
  width?: string
  padding?: string
  children: ReactNode
}

const Container: FunctionComponent<CompProps> = ({ 
    tagName: Tag  = 'div', 
    gap = '4px', 
    width = 'auto',
    padding = '2px',
    className = '',
    children 
}) => {
    return (
        <>
            <style jsx>{`
                .container {
                    margin: 0 auto;
                    width: ${width};
                    gap: ${gap};
                    padding: ${padding};
                }
            `}</style>
            <Tag className={`container ${className}`}>
                {children}
            </Tag>
        </>
    )
}

export default Container