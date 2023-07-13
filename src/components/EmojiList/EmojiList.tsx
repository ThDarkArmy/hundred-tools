import Grid from '@mui/material/Grid';
import styles from "./EmojiList.module.css";

const EmojiList: React.FC<any> = (props) => {
    const { symbols = [], handleClick } = props;
    return (
        <>
            <Grid container spacing={1}>
                {symbols.map((emoji: any, index: any) => (
                    <Grid item key={emoji.title}>
                        <div className={styles.EmojiContainer} onClick={(e)=> handleClick(e, emoji)}>
                            <h5 className={styles.Emoji}>{emoji.emoji}</h5>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default EmojiList;