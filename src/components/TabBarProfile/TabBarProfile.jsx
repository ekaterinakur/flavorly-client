import { Outlet } from 'react-router-dom';
import TabElement from '../TabElement/TabElement';
import './TabBarProfile.scss';

function TabBarProfile({ isOwner }) {
  return (
    <>
      <div className="content">
        {(isOwner && (
          <nav className="tabs">
            <TabElement path="my-recipes" title="My Recipes" />
            <TabElement path="my-favorites" title="My Favorites" />
            <TabElement path="my-followers" title="Followers" />
            <TabElement path="my-following" title="Following" />
          </nav>
        )) || (
          <nav className="tabs">
            <TabElement path="recipes" title="Recipes" />
            <TabElement path="followers" title="Followers" />
          </nav>
        )}

        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default TabBarProfile;
