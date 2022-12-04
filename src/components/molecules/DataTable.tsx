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
  text: string;
}

const DataTableContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.white};
  border-radius: 10px;
  width: 100%;

  @media ${device.mobileS} {
    margin: 32px;
  }

  @media ${device.tablet} {
    width: 40%;
  }
`;

const Title = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
  font-size: 16;
  padding: 20px 0;
  cursor: pointer;
`;

const Item = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  color: ${colors.black};
  font-size: 16;
  padding: 20px 0;
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

DataTable.Item = ({ text }: ItemProps) => {
  return <Item>{text}</Item>;
};

export default DataTable;
