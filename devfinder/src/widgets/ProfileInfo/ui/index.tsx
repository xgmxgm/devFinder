import styles from './ProfileInfo.module.scss'

type TProps = {
    children: React.ReactNode,
}

export const ProfileInfo = (props: TProps) => {
    const { children } = props;

    return (
        <div className={styles.content}>
            {children}
        </div>
    )
}