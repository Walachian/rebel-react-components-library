/// <reference types="react" />
declare type RebelButtonProps = {
    text?: string;
    onClick?: () => void;
};
declare function RebelButton({ text, onClick }: RebelButtonProps): JSX.Element;
export default RebelButton;
