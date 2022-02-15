/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Menu">
          <Spacer />
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss Menu</VisuallyHidden>
          </CloseButton>
          <NavWrapper>
            <NavItem href="/sale">Sale</NavItem>
            <NavItem href="/new">New&nbsp;Releases</NavItem>
            <NavItem href="/men">Men</NavItem>
            <NavItem href="/women">Women</NavItem>
            <NavItem href="/kids">Kids</NavItem>
            <NavItem href="/collections">Collections</NavItem>
          </NavWrapper>
          <Footer>
            <FooterItem href="/terms">Terms and Conditions</FooterItem>
            <FooterItem href="/privacy">Privacy Policy</FooterItem>
            <FooterItem href="/contact">Contact Us</FooterItem>
          </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsl(220deg 5% 40% / 0.8);
  display: flex;
  justify-content: flex-end;
`;

const Content = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 300px;
  background-color: white;
  padding: 32px;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 32px;
  right: 22px;
`;
const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin: 48px 0;
`;

const NavItem = styled.a`
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${18/16}rem;
  color: ${COLORS.gray[900]};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

const FooterItem = styled.a`
  color: ${COLORS.gray[700]};
  text-decoration: none;
`;

export default MobileMenu;
