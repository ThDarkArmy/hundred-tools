import Grid from '@mui/material/Grid';
import styles from "./SymbolList.module.css";

const SymbolList: React.FC<any> = (props) => {
    const { symbols = [], handleClick } = props;
    return (
        <>
            <Grid container spacing={1}>
                {symbols.map((symbol: any, index: any) => (
                    <Grid item key={index}>
                        <div className={styles.SymbolContainer} onClick={handleClick}>
                            <h5 className={styles.Symbol}>{symbol}</h5>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SymbolList