/// <reference types="react" />
declare type RebelButtonProps = {
    text?: string;
    onClick?: () => void;
};
declare function RebelButton({ text, onClick }: RebelButtonProps): JSX.Element;

declare const index_d_RebelButton: typeof RebelButton;
declare namespace index_d {
  export {
    index_d_RebelButton as RebelButton,
  };
}

export { index_d as Components };
