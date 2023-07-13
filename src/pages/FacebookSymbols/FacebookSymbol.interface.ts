export interface IEmojiObject {
    name: string;
    symbols: ISymbol[];
    id: string;
}

export interface ISymbol {
    emoji: string;
    title: string;
    detail: string;
}