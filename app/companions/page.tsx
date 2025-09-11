import {createSupabaseClient} from "@/lib/supabase";

const CompanionsLibrary = async() => {

  const supabase=createSupabaseClient();
  const {data,error}=await supabase.from('companions').select();
  if(error || !data){
    throw new Error(error?.message || 'Failed to fetch all companions');
  }
  return (
    <div>This is companion Library</div>
  );
}

export default CompanionsLibrary;
