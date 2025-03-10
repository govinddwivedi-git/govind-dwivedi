import React, { useEffect, useState } from "react";
import { USER } from "../constants/index";
import gfglogo from "../assets/gfglogo.jpeg";
import lclogo from "../assets/lclogo.png";
import { SiCodechef, SiCodeforces, SiGeeksforgeeks, SiLeetcode } from "react-icons/si";
import { motion } from "framer-motion";

export default function ProblemSolving() {
  const [codechefData, setCodechefData] = useState(null);
  const [codeforcesData, setCodeforcesData] = useState(null);
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = USER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch CodeChef data
        if (user) {
          const statsResponse = await fetch(
            `https://codechef-api.vercel.app/handle/${user}`
          );
          const data = await statsResponse.json();
          if (data.success) {
            setCodechefData({
              name: data.name,
              stars: data.stars,
              currentRating: data.currentRating,
              highestRating: data.highestRating,
              globalRank: data.globalRank,
              countryRank: data.countryRank,
              countryName: data.countryName,
              profile: data.profile,
              countryFlag: data.countryFlag,
            });
          }
        }

        // Fetch Codeforces data

        if (user) {
          const statsResponse = await fetch(
            `https://codeforces.com/api/user.info?handles=${user}`
          );
          const data = await statsResponse.json();
          if (data.status === "OK") {
            const userInfo = data.result[0];
            setCodeforcesData({
              name: userInfo.handle,
              rank: userInfo.rank || "unranked",
              currentRating: userInfo.rating || 0,
              maxRating: userInfo.maxRating || 0,
              profile: userInfo.titlePhoto,
              countryName: userInfo.country || "Unknown",
              organization: userInfo.organization || "",
            });
          }
        }

        // Add LeetCode data fetching
        if (user) {
          const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${user}`);
          const data = await response.json();
          
          if (data.status === "success") {
            setLeetcodeData({
              name: user,
              ranking: data.ranking,
              solvedQuestions: {
                easy: data.easySolved,
                medium: data.mediumSolved,
                hard: data.hardSolved,
                total: data.totalSolved
              },
              totalQuestions: {
                easy: data.totalEasy,
                medium: data.totalMedium,
                hard: data.totalHard,
                total: data.totalQuestions
              },
              acceptanceRate: data.acceptanceRate,
              contributionPoints: data.contributionPoints,
              reputation: data.reputation
            });
          }
        }
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    // Call fetchData when component mounts
    fetchData();
  }, [user]); // Add user as dependency

  const getCodeforcesRankColor = (rank) => {
    switch (rank) {
      case "newbie":
        return "#808080";
      case "pupil":
        return "#008000";
      case "specialist":
        return "#03A89E";
      case "expert":
        return "#0000FF";
      case "candidate master":
        return "#AA00AA";
      case "master":
        return "#FF8C00";
      case "international master":
        return "#FF8C00";
      case "grandmaster":
        return "#FF0000";
      case "international grandmaster":
        return "#FF0000";
      case "legendary grandmaster":
        return "#FF0000";
      default:
        return "#808080";
    }
  };

  const getStarColor = (rating) => {
    const numRating = parseInt(rating);
    if (numRating < 1400) return "#666666";        // 1★
    if (numRating < 1600) return "#1E7D22";        // 2★
    if (numRating < 1800) return "#3366CC";        // 3★
    if (numRating < 2000) return "#684273";        // 4★
    if (numRating < 2200) return "#FFD819";        // 5★
    if (numRating < 2500) return "#FF7F00";        // 6★
    return "#D0011B";                              // 7★
  };

  const getStars = (rating) => {
    const numRating = parseInt(rating);
    if (numRating < 1400) return 1;
    if (numRating < 1600) return 2;
    if (numRating < 1800) return 3;
    if (numRating < 2000) return 4;
    if (numRating < 2200) return 5;
    if (numRating < 2500) return 6;
    return 7;
  };


  return (
    <section className="pt-20" id="cp-dsa">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center text-4xl font-bold tracking-tighter mb-8"
      >
        CP / DSA
      </motion.h2>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-2">
          {codechefData ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1, delay: 0.2 }}
              className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
            >
              <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
                CodeChef Statistics
                <SiCodechef className="text-4xl text-red-400 lg:text-5xl" />
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={codechefData.profile}
                  alt="CodeChef Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{user}</h3>
                  <a
                    href={`https://www.codechef.com/users/${user}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Profile
                  </a>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  {[...Array(getStars(codechefData.currentRating))].map((_, i) => (
                    <span
                      key={i}
                      className="text-2xl"
                      style={{
                        color: getStarColor(codechefData.currentRating),
                        textShadow: "0px 0px 3px rgba(0,0,0,0.3)"
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-lg">
                <div className=" p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Ratings</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Current Rating: </span>
                      <span className="text-blue-600">
                        {codechefData.currentRating}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Highest Rating: </span>
                      <span className="text-green-600">
                        {codechefData.highestRating}
                      </span>
                    </p>
                  </div>
                </div>

                <div className=" p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Rankings</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Global Rank: </span>
                      <span className="text-purple-600">
                        #{codechefData.globalRank}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Country Rank: </span>
                      <span className="text-purple-600">
                        #{codechefData.countryRank}
                      </span>
                      <span className="ml-2">({codechefData.countryName})</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1, delay: 0.2 }}
              className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
            >
              <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
                CodeChef Statistics
                <SiCodechef className="text-4xl text-red-400 lg:text-5xl" />
              </h3>
              <p className="text-yellow-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Unable to load data. Please visit <a href={`https://www.codechef.com/users/${user}`} className="underline" target="_blank" rel="noopener noreferrer">profile</a> for statistics.
              </p>
            </motion.div>
          )}

          {codeforcesData ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1, delay: 0.4 }}
              className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
            >
              <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
                Codeforces Statistics
                <SiCodeforces className="text-4xl text-blue-400 lg:text-5xl"/>
              </h3>
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={codeforcesData.profile}
                  alt="Codeforces Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{codeforcesData.name}</h3>
                  <a
                    href={`https://codeforces.com/profile/${codeforcesData.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Profile
                  </a>
                </div>
                <div className="ml-auto">
                  <span
                    className="px-3 py-1 rounded-full text-white"
                    style={{
                      backgroundColor: getCodeforcesRankColor(
                        codeforcesData.rank
                      ),
                    }}
                  >
                    {codeforcesData.rank}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-lg">
                <div className=" p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Ratings</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Current Rating: </span>
                      <span className="text-blue-600">
                        {codeforcesData.currentRating}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Max Rating: </span>
                      <span className="text-green-600">
                        {codeforcesData.maxRating}
                      </span>
                    </p>
                  </div>
                </div>

                <div className=" p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Additional Info</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Country: </span>
                      <span>{codeforcesData.countryName}</span>
                    </p>
                    {codeforcesData.organization && (
                      <p>
                        <span className="font-medium">Organization: </span>
                        <span>{codeforcesData.organization}</span>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1, delay: 0.4 }}
              className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
            >
              <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
                Codeforces Statistics
                <SiCodeforces className="text-4xl text-blue-400 lg:text-5xl"/>
              </h3>
              <p className="text-yellow-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Unable to load data. Please visit <a href={`https://codeforces.com/profile/${user}`} className="underline" target="_blank" rel="noopener noreferrer">profile</a> for statistics.
              </p>
            </motion.div>
          )}

          {leetcodeData ? (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1, delay: 0.6 }}
              className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
            >
              <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
                LeetCode Statistics
                <SiLeetcode className="text-4xl text-yellow-600 lg:text-5xl"/>
              </h3>
              <div className="flex items-center gap-4 mb-4">
              <img
                  src={lclogo}
                  alt="Codeforces Profile"
                  className="w-16 h-16 rounded-full"
                />
                <div>
                  <h3 className="text-xl font-semibold">{leetcodeData.name}</h3>
                  <a
                    href={`https://leetcode.com/${leetcodeData.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    View Profile
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6 text-lg">
                <div className="p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Problem Solving</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Easy:</span>{" "}
                      <span className="text-green-600">
                        {leetcodeData.solvedQuestions.easy}/{leetcodeData.totalQuestions.easy}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Medium:</span>{" "}
                      <span className="text-yellow-600">
                        {leetcodeData.solvedQuestions.medium}/{leetcodeData.totalQuestions.medium}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Hard:</span>{" "}
                      <span className="text-red-600">
                        {leetcodeData.solvedQuestions.hard}/{leetcodeData.totalQuestions.hard}
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Total:</span>{" "}
                      <span className="text-blue-600">
                        {leetcodeData.solvedQuestions.total}/{leetcodeData.totalQuestions.total}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-2">Additional Info</h4>
                  <div className="space-y-2">
                    <p>
                      <span className="font-medium">Acceptance Rate:</span>{" "}
                      <span className="text-purple-600">
                        {leetcodeData.acceptanceRate.toFixed(2)}%
                      </span>
                    </p>
                    <p>
                      <span className="font-medium">Global Ranking:</span>{" "}
                      <span>{leetcodeData.ranking}</span>
                    </p>
                    <p>
                      <span className="font-medium">Contribution Points:</span>{" "}
                      <span>{leetcodeData.contributionPoints}</span>
                    </p>
                    <p>
                      <span className="font-medium">Reputation:</span>{" "}
                      <span>{leetcodeData.reputation}</span>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              
              transition={{ duration: 1, delay: 0.6 }}
              className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
            >
              <h3 className="text-2xl font-semibold mb-6 flex justify-between items-center">
                LeetCode Statistics
                <SiLeetcode className="text-4xl text-yellow-600 lg:text-5xl"/>
              </h3>
              <p className="text-yellow-500 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                Unable to load data. Please visit <a href={`https://leetcode.com/${user}`} className="underline" target="_blank" rel="noopener noreferrer">profile</a> for statistics.
              </p>
            </motion.div>
          )}

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            
            transition={{ duration: 1, delay: 0.8 }}
            className="rounded-3xl bg-black/20 backdrop-blur-lg p-6 border border-stone-50/30"
          >
            <h3 className="text-2xl font-semibold mb-2 flex justify-between items-center">
              GeeksForGeeks Statistics
              <SiGeeksforgeeks className="text-4xl text-green-800 lg:text-5xl"/>
            </h3>
            <p className="text-yellow-500 text-sm mb-4 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Statistics may not be up to date. Please visit profile for accurate results.
            </p>
            <div className="flex items-center gap-4 mb-4">
            <img
                    src={gfglogo}
                    alt="LeetCode Profile"
                    className="w-16 h-16 rounded-full"
                  />
              <div>
                <h3 className="text-xl font-semibold">govinddwivedi</h3>
                <a
                  href={`https://www.geeksforgeeks.org/user/govinddwivedi/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Profile
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 text-lg">
              <div className=" p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Problem Solving</h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Easy:</span>{" "}
                    <span className="text-green-600">
                      148
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Medium:</span>{" "}
                    <span className="text-yellow-600">
                      180
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Hard:</span>{" "}
                    <span className="text-red-600">
                      35
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Total:</span>{" "}
                    <span className="text-blue-600">
                      392
                    </span>
                  </p>
                </div>
              </div>

              <div className=" p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-2">Contest Info</h4>
                <div className="space-y-2">
                  <p>
                    <span className="font-medium">Contest Rating:</span>{" "}
                    <span className="text-purple-600">
                      1849
                    </span>
                  </p>
                  <p>
                    <span className="font-medium">Global Rank:</span>{" "}
                    <span>1695</span>
                  </p>
                  <p>
                    <span className="font-medium">Contests Attended:</span>{" "}
                    <span>5</span>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
