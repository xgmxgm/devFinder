import { forwardRef } from 'react'
import styles from "./Button.module.scss"

interface IProps {
    children: string,
    onClick?: () => void
}

export const Button = forwardRef<HTMLButtonElement, IProps>(( props, ref ) => {
    const { children, onClick } = props;

    return (
        <button ref={ref} onClick={onClick} className={styles.Button}>
            {children}
        </button>
    )
})