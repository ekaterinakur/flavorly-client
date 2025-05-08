import { Outlet } from 'react-router-dom';
import TabElement from '../TabElement/TabElement';
import './TabsList.scss';

function TabsList({ isOwner }) {
  return (
    <>
      <div className="content">
        <nav className="tabs">
          {(isOwner && (
            <>
              <TabElement path="my-recipes" title="My Recipes" />
              <TabElement path="my-favorites" title="My Favorites" />
              <TabElement path="my-followers" title="Followers" />
              <TabElement path="my-following" title="Following" />
            </>
          )) || (
            <>
              <TabElement path="recipes" title="Recipes" />
              <TabElement path="followers" title="Followers" />
            </>
          )}
        </nav>
        <div className="outlet">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default TabsList;
