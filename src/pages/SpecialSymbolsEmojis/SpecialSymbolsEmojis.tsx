import { useParams } from "react-router-dom"
import SymbolsComponent from "../../components/SymbolsComponent/SymbolsComponent";
import { bulletPointEmojiObjectList, bulletPointSymbolsObjectList, bulletPointsEmojiList, bulletPointsSymbolsList, emojiTableColumns, heartEmojisList, heartEmojisObjectList, heartSymbolsList, heartSymbolsObjectList, musicEmojisList, musicEmojisObjectList, musicSymbolsList, musicSymbolsObjectList, sadEmojisList, sadEmojisObjectList, symbolTableColumns } from "./SpecialSymbolsEmojis.constants";
import EmojisComponent from "../../components/EmojisComponent/EmojiComponent";

const SpecialSymbolsEmojis = () => {
    const {topic, type} = useParams(); 

    const renderSymbols = () => {
        switch(topic) {
            case "music": return <SymbolsComponent symbolsList={musicSymbolsList} symbolsObjectList={musicSymbolsObjectList} topic={topic} symbolTableColumns={symbolTableColumns} title={"Music Symbols"}/>
            case "heart": return <SymbolsComponent symbolsList={heartSymbolsList} symbolsObjectList={heartSymbolsObjectList} topic={topic} symbolTableColumns={symbolTableColumns} title={"Heart Symbols"}/>
            case "bullet-points": return <SymbolsComponent symbolsList={bulletPointsSymbolsList} symbolsObjectList={bulletPointSymbolsObjectList} topic={topic} symbolTableColumns={symbolTableColumns} title={"Bullet Point Symbols"}/>
            default : return <></>
        }
    }

    const renderEmojis = () => {
        switch(topic) {
            case "music": return <EmojisComponent emojisList={musicEmojisList} emojisObjectList={musicEmojisObjectList} topic={topic} emojiTableColumns={emojiTableColumns} title={"Music Emojis"}/>
            case "heart": return <EmojisComponent emojisList={heartEmojisList} emojisObjectList={heartEmojisObjectList} topic={topic} emojiTableColumns={emojiTableColumns} title={"Heart Emojis"}/>
            case "sad": return <EmojisComponent emojisList={sadEmojisList} emojisObjectList={sadEmojisObjectList} topic={topic} emojiTableColumns={emojiTableColumns} textSymbol={false} title={"Sad Emojis"}/>
            case "bullet-points": return <EmojisComponent emojisList={bulletPointsEmojiList} emojisObjectList={bulletPointEmojiObjectList} topic={topic} emojiTableColumns={emojiTableColumns} title={"Bullet Point Emojis"}/>
            default : return <></>
        }
    }
  return (
    <div>
        {type==="symbol" ? renderSymbols() : renderEmojis()}
    </div>
  )
}

export default SpecialSymbolsEmojis