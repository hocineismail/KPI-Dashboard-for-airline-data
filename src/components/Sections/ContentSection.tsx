import React, { ReactNode } from 'react'
import './ContentSection.scss'

type Props = {  
    children: ReactNode;
  };
  
export default function ContentSection({ children }: Props): JSX.Element {
    return (
        <div className="app-section-content">
            {children}
        </div>
    )
}
