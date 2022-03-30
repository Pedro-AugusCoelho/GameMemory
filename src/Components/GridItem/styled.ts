import styled from "styled-components";

type GridItemProps = {
    shownBackground:boolean
}

type IconProps = {
    opacity?:number;
}

export const BoxGridItem = styled.div<GridItemProps>`
    background-color: ${Props => Props.shownBackground ? '#1550FF' : '#E2E3E3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const Icon = styled.img<IconProps>`
    width: 40px;
    height: 40px;
    opacity: ${Props => Props.opacity ?? 1};
`;