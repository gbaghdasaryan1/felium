import { useRouter } from "next/router";
import SeeAllComponent from "../../pageComponents/see-all";



const SeeAll = () => {

  const router = useRouter();
  let {alias} = router.query;
  
  return(
    <div >
      <SeeAllComponent alias={alias as string}/>
    </div>
  )
};
export default SeeAll;