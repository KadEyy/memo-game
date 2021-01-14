import "styled-components";

declare module 'styled-components' {
    export interface DefaultTheme {
        fontFamily: string;
        colors: {
            tiles: string[];
            content: {
                font: string;
                background: string;
                theme: string;
            };
        }
    }
}