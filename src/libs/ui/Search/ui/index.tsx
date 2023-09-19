import { Button } from "../../Button"
import styles from "./Input.module.scss"

type TProps = {
    inputData: string,
    setInputData: (InputData: string) => void,
    functionForBtn: () => void,
}

export const Search = ({ inputData, setInputData, functionForBtn }: TProps) => {
    return (
        <div className={styles.Input_body_div}>
            <div className={styles.Input_body}>
                <input
                    type="search"
                    className={styles.Input}
                    placeholder="Search GitHub username..."
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)} />
                <Button onClick={functionForBtn}>Search</Button>
            </div>
        </div>
    )
}