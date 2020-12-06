import React, { ComponentType, ReactNode, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import AccountSubview from '../../components/Profile/AccountSubview';
import NotificationsSubview from '../../components/Profile/NotificationsSubview';
import SupportSubview from '../../components/Profile/SupportSubview';

import { ReactComponent as Account } from '../../assets/svg/profile/account.svg';
import { ReactComponent as AccountSelected } from '../../assets/svg/profile/account_selected.svg';
import { ReactComponent as Notif } from '../../assets/svg/profile/notif.svg';
import { ReactComponent as NotifSelected } from '../../assets/svg/profile/notif_selected.svg';
import { ReactComponent as Support } from '../../assets/svg/profile/support.svg';
import { ReactComponent as SupportSelected } from '../../assets/svg/profile/support_selected.svg';
import { useGetUserQuery, UserProfileFragment } from '../../graphql/graphql';
import BTLoader from 'components/Common/BTLoader';

const tabs: {
  key: string;
  label: string;
  selectedImage: ReactNode;
  deselectedImage: ReactNode;
  component:
    | ComponentType<{ userProfile: UserProfileFragment }>
    | ComponentType;
}[] = [
  {
    key: 'account',
    label: 'Your Account',
    selectedImage: <AccountSelected />,
    deselectedImage: <Account />,
    component: AccountSubview,
  },
  {
    key: 'notif',
    label: 'Your Account',
    selectedImage: <NotifSelected />,
    deselectedImage: <Notif />,
    component: NotificationsSubview,
  },
  {
    key: 'support',
    label: 'Support',
    selectedImage: <SupportSelected />,
    deselectedImage: <Support />,
    component: SupportSubview,
  },
];

const Profile = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const { data, loading, error } = useGetUserQuery();

  const TabComponent = tabs[tabIndex].component;

  return (
    <div className="profile-container">
      <Container>
        <Row>
          <Col lg={2}>
            {tabs.map((tab, index) => (
              <div
                key={tab.key}
                id={tab.key}
                className={tabIndex === index ? 'selected' : ''}
                onClick={() => setTabIndex(index)}
              >
                {tabIndex === index ? tab.selectedImage : tab.deselectedImage}
                <span>Your Account</span>
              </div>
            ))}
          </Col>
          <Col lg={10} className="subview-container">
            {loading ? (
              <BTLoader />
            ) : (
              <TabComponent userProfile={data?.user!} />
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Profile;