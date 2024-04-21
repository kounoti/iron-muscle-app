// "use client";

// import React, { useEffect, useState } from "react";
// import TimeLine, {
//   TimeLineMemoriesType,
//   TimeLineMemoryType,
//   TimeLineType,
//   UserInfoType,
// } from "./TimeLine";
// import { supabase } from "../../../utils/supabaseClient";

// const TimeLineInfo = ({ timeLineMemories }: TimeLineMemoriesType) => {
//   const [userInfo, setUserInfo] = useState<UserInfoType[]>([]);

//   useEffect(() => {
//     async function fetchUserData(): Promise<void> {
//       try {
//         const { data, error } = await supabase
//           .from("userInformation")
//           .select("*")
//           .eq("user_account", timeLineMemories[0].account);
//         if (error) {
//           throw error;
//         }

//         setUserInfo(data[0]);
//       } catch (error: any) {
//         console.error("Error fetching user data:", error.message);
//       }
//     }

//     fetchUserData();
//   }, [timeLineMemories]);

//   return <TimeLine timeLineMemories={timeLineMemories} userInfo={userInfo} />;
// };

// export default TimeLineInfo;
