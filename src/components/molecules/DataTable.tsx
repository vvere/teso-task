import { ReactNode } from 'react';
import styled from 'styled-components';
import { SortIcon } from 'assets/icons';
import colors from 'themes/colors';
import { device } from 'themes/devices';

interface DataTableProps {
  children: ReactNode;
}

interface TitleProps {
  title: string;
  onClick?: () => void;
}

interface ItemProps {
  text: string | number;
  color?: string;
}

const DataTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 10px;
  width: 100%;
  overflow: scroll;

  @media ${device.mobileS} {
    margin: 32px;
    max-height: calc(100% - 48px);
  }

  @media ${device.tablet} {
    width: 40%;
    max-height: calc(100% - 112px);
  }
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-size: 16px;
  padding: 20px 0;
  cursor: pointer;
  font-family: Roboto;
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${({ color }: { color?: string }) => color || colors.black};
  font-size: 16px;
  padding: 20px 0;
  font-family: Roboto;
`;

const IconContainer = styled.div`
  margin-left: 10px;
  display: flex;
  align-items: center;
`;

const DataTable = ({ children }: DataTableProps) => {
  return <DataTableContainer>{children}</DataTableContainer>;
};

DataTable.Header = styled.header`
  display: flex;
  background-color: ${colors.purple};
  border-radius: 10px 10px 0 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

DataTable.Row = styled.div`
  display: flex;
`;

DataTable.Title = ({ onClick, title }: TitleProps) => {
  return (
    <Title onClick={onClick}>
      {title}
      <IconContainer>
        <SortIcon />
      </IconContainer>
    </Title>
  );
};

DataTable.Item = ({ color, text }: ItemProps) => {
  return <Item color={color}>{text}</Item>;
};

export default DataTable;
