import { ReactNode } from "react";

export interface IErrorHandlerProps {
    children?: ReactNode;
}

export interface IErrorHandlerState {
    hasError: boolean;
}

export interface IErrorLogBody {
    level: string;
    message: string;
    stack?: string;
    context: React.ErrorInfo;
}

export interface IErrorLogResponse {
    response : {
        responseCode: string;
        message: string;
    }
}