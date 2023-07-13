import Grid from '@mui/material/Grid';
import styles from "./SpecialEmojiList.module.css";

const SpecialEmojiList: React.FC<any> = (props) => {
    const { emojis = [], handleClick } = props;
    return (
        <>
            <Grid container spacing={1}>
                {emojis.map((emoji: any) => (
                    <Grid item key={emoji.title}>
                        <div className={styles.EmojiContainer} onClick={()=> handleClick(emoji)}>
                            <h5 className={styles.Emoji}>{emoji}</h5>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default SpecialEmojiList;