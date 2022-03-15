import React from 'react';
import {Story} from '@storybook/react/types-6-0';
import styled from 'styled-components';
import {Typography, Radius, Color} from '@tricot-inc/fujimi-ui-core';
import {Stack, Spacer, Text} from '@tricot-inc/fujimi-ui-react';

// Fujimi icons
import {BarArrowBackIcon} from './fujimi/BarArrowBackIcon';
import {BarArrowDownIcon} from './fujimi/BarArrowDownIcon';
import {BarArrowUpIcon} from './fujimi/BarArrowUpIcon';
import {BarArrowFowardIcon} from './fujimi/BarArrowFowardIcon';
import {BlockIcon} from './fujimi/BlockIcon';
import {CapsuleHardIcon} from './fujimi/CapsuleHardIcon';
import {CapsuleIcon} from './fujimi/CapsuleIcon';
import {CapsuleSoftIcon} from './fujimi/CapsuleSoftIcon';
import {CartIcon} from './fujimi/CartIcon';
import {ExpandMoreIcon} from './fujimi/ExpandMoreIcon';
import {MenuIcon} from './fujimi/MenuIcon';
import {MinusIcon} from './fujimi/MinusIcon';
import {ProteinIcon} from './fujimi/ProteinIcon';
import {CreditCardIcon} from './fujimi/CreditCardIcon';
import {LogoIcon} from './fujimi/LogoIcon';
import {FooterLogo} from './fujimi/FooterLogo';
import {HeaderLogoIcon} from './fujimi/HeaderLogoIcon';
import {LoadingIcon} from './fujimi/LoadingIcon';
import {LogoIconWithPrefix} from './fujimi/LogoIconWithPrefix';

// Material icons
import {AccountCircleIcon} from './material/AccountCircleIcon';
import {AddIcon} from './material/AddIcon';
import {ArrowDownIcon} from './material/ArrowDownIcon';
import {ArrowDropDownIcon} from './material/ArrowDropDownIcon';
import {ArrowDropLeftIcon} from './material/ArrowDropLeftIcon';
import {ArrowDropRightIcon} from './material/ArrowDropRightIcon';
import {ArrowDropUpIcon} from './material/ArrowDropUpIcon';
import {ArrowLeftIcon} from './material/ArrowLeftIcon';
import {ArrowRightIcon} from './material/ArrowRightIcon';
import {ArrowUpIcon} from './material/ArrowUpIcon';
import {CheckBoxIcon} from './material/CheckBoxIcon';
import {CheckBoxOutlineIcon} from './material/CheckBoxOutlineIcon';
import {CheckCircleIcon} from './material/CheckCircleIcon';
import {ClearIcon} from './material/ClearIcon';
import {CreateIcon} from './material/CreateIcon';
import {DeleteIcon} from './material/DeleteIcon';
import {DoneIcon} from './material/DoneIcon';
import {EmailIcon} from './material/EmailIcon';
import {ErrorIcon} from './material/ErrorIcon';
import {EventNoteIcon} from './material/EventNoteIcon';
import {FirstPageIcon} from './material/FirstPageIcon';
import {GroupsIcon} from './material/GroupsIcon';
import {HelpIcon} from './material/HelpIcon';
import {HomeIcon} from './material/HomeIcon';
import {InventoryIcon} from './material/InventoryIcon';
import {LastPageIcon} from './material/LastPageIcon';
import {LeaderboardIcon} from './material/LeaderboardIcon';
import {LocalPhoneIcon} from './material/LocalPhoneIcon';
import {LocationOnIcon} from './material/LocationOnIcon';
import {LockIcon} from './material/LockIcon';
import {LogoutIcon} from './material/LogoutIcon';
import {MoreHorizIcon} from './material/MoreHorizIcon';
import {NotificationsIcon} from './material/NotificationsIcon';
import {PeopleBlackIcon} from './material/PeopleBlackIcon';
import {RadioButtonCheckedIcon} from './material/RadioButtonCheckedIcon';
import {RadioButtonUncheckedIcon} from './material/RadioButtonUncheckedIcon';
import {ReplayIcon} from './material/ReplayIcon';
import {SearchIcon} from './material/SearchIcon';
import {SettingsIcon} from './material/SettingsIcon';

export default {
  title: 'icons',
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
`;

const Item = styled(Stack)`
  border: 1px solid ${Color.GRAY.GRAY_20};
  border-radius: ${Radius.MEDIUM};
  padding: 24px;
`;

const LargeItem = styled(Stack)`
  border: 1px solid ${Color.GRAY.GRAY_20};
  border-radius: ${Radius.MEDIUM};
  padding: 24px;
  grid-column: span 3 / span 3;
`;

const Icon = styled.div`
  margin-bottom: 16px;
`;

const Label = styled(Text)`
  margin-top: auto;
`;

const fujimiIconTemplate: Story = () => (
  <>
    <Text bold typography={{mobile: Typography.SF_COMFORT_32}}>
      Fujimi icons
    </Text>

    <Spacer sizes={{mobile: {mt: 32}}} />

    <Container>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <BarArrowBackIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          BarArrowBackIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <BarArrowDownIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          BarArrowDownIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <BarArrowUpIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          BarArrowUpIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <BarArrowFowardIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          BarArrowFowardIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <BlockIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>BlockIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CapsuleHardIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CapsuleHardIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CapsuleIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CapsuleIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CapsuleSoftIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CapsuleSoftIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CartIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>CartIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ExpandMoreIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ExpandMoreIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <MenuIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>MenuIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <MinusIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>MinusIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ProteinIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ProteinIcon
        </Label>
      </Item>

      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CreditCardIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CreditCardIcon
        </Label>
      </Item>

      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LoadingIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LoadingIcon
        </Label>
      </Item>

      <LargeItem mobile={{hAlign: 'center'}}>
        <Icon>
          <LogoIcon color={Color.Primary.GRAY_50} />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>LogoIcon</Label>
      </LargeItem>

      <LargeItem mobile={{hAlign: 'center'}}>
        <Icon>
          <LogoIconWithPrefix />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LogoIconWithPrefix
        </Label>
      </LargeItem>

      <LargeItem mobile={{hAlign: 'center'}}>
        <Icon>
          <HeaderLogoIcon color={Color.Primary.GRAY_50} />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          HeaderLogoIcon
        </Label>
      </LargeItem>

      <LargeItem mobile={{hAlign: 'center'}}>
        <Icon>
          <FooterLogo />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          FooterLogo
        </Label>
      </LargeItem>
    </Container>
  </>
);

export const fujimi = fujimiIconTemplate.bind({});

const materialIconTemplate: Story = () => (
  <>
    <Text bold typography={{mobile: Typography.SF_COMFORT_32}}>
      Material icons
    </Text>

    <Spacer sizes={{mobile: {mt: 32}}} />

    <Container>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <AccountCircleIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          AccountCircleIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <AddIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>AddIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowDownIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowDownIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowDropDownIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowDropDownIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowDropLeftIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowDropLeftIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowDropRightIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowDropRightIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowDropUpIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowDropUpIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowLeftIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowLeftIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowRightIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowRightIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ArrowUpIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ArrowUpIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CheckBoxIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CheckBoxIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CheckBoxOutlineIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CheckBoxOutlineIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CheckCircleIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CheckCircleIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ClearIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>ClearIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <CreateIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          CreateIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <DeleteIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          DeleteIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <DoneIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>DoneIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <EmailIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>EmailIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ErrorIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>ErrorIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <EventNoteIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          EventNoteIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <FirstPageIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          FirstPageIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <GroupsIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          GroupsIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <HelpIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>HelpIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <HomeIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>HomeIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <InventoryIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          InventoryIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LastPageIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LastPageIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LeaderboardIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LeaderboardIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LocalPhoneIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LocalPhoneIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LocationOnIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LocationOnIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LockIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>LockIcon</Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <LogoutIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          LogoutIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <MoreHorizIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          MoreHorizIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <NotificationsIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          NotificationsIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <PeopleBlackIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          PeopleBlackIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <RadioButtonCheckedIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          RadioButtonCheckedIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <RadioButtonUncheckedIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          RadioButtonUncheckedIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <ReplayIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          ReplayIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <SearchIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          SearchIcon
        </Label>
      </Item>
      <Item mobile={{hAlign: 'center'}}>
        <Icon>
          <SettingsIcon />
        </Icon>
        <Label typography={{mobile: Typography.SF_COMFORT_12}}>
          SettingsIcon
        </Label>
      </Item>
    </Container>
  </>
);

export const material = materialIconTemplate.bind({});
