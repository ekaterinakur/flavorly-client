import { RecipeList } from '../components/RecipeList/RecipeList';

export default function ProfileRecipesPage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const userDetails = useSelector(selectUserById);
  let isOwner = !userId || userId === currentUser?.id;
  console.log('isOwner: ', isOwner);
  // isOwner = false;

  return (
    <div className="container main-container">
      <RecipeList items="" columns={1} />
    </div>
  );
}
