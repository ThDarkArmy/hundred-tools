import { Component, ErrorInfo } from "react";
import { IErrorHandlerProps, IErrorHandlerState } from "./ErrorHandler.interface";

class ErrorHandler extends Component<IErrorHandlerProps, IErrorHandlerState> {

    public state: IErrorHandlerState = {
        hasError: false,
    }

    public static getDerivedStateFromError(_: Error): IErrorHandlerState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        //todo: implement later
        console.log(error, errorInfo)
    }

    handleGoBack = () => {
        window.history.back();
    }

    public render() {
        if(this.state.hasError) {
            return (
                <div>
                    <h4>{`${"SOMETHING_WENT_WRONG_ERROR_BOUNDARIES"}`}</h4>
                    <span onClick={this.handleGoBack}>{`${'BACK_BUTTON'}`}</span>
                </div>
            )
        }
    }
}

export default ErrorHandler;