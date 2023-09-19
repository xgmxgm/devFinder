"use client"

import { useState } from "react";
import Image from 'next/image';

import { Search } from '@/libs/ui/Search'
import styles from './page.module.scss'
import { ProfileInfo } from '@/widgets/ProfileInfo'
import { GetGithubUser } from '@/components/GetGithubUser'
import { IDataGit } from '@/types/types'
import { Loading } from "@/libs/ui/Loading";

export default function Home() {
  const [userData, setUserData] = useState<null | IDataGit>(null);
  const [username, setUsername] = useState<string>('');
  const [isLoading, setIsLoading] = useState<null | boolean>(null);
  const [message, setMessage] = useState<string>('');

  return (
    <div className={styles.main}>
      <h1>devfinder</h1>
      <Search inputData={username} setInputData={setUsername} functionForBtn={() => GetGithubUser(setUserData, username, setUsername, setIsLoading, setMessage)} />
        {!isLoading ? userData ?
          <ProfileInfo>
            <div className={styles.info}>
              <div className={styles.left_colum}>
                <img src={userData && userData.avatar_url} alt="Not Available" />
              </div>
              <div className={styles.right_colum}>
                <div className={styles.up}>
                  <div>
                    <h2>{userData &&  userData.login}</h2>
                  </div>
                  <div className={styles.bio}>
                    <p>{userData &&  userData.bio}</p>
                  </div>
                </div>
                <div className={styles.center}>
                  <div className={styles.info}>
                    <h3>Repos</h3>
                    <p>{userData && userData.public_repos}</p>
                  </div>
                  <div className={styles.info}>
                    <h3>Followers</h3>
                    <p>{userData && userData.followers}</p> 
                  </div>
                  <div className={styles.info}>
                    <h3>Following</h3>
                    <p>{userData &&  userData.following}</p>
                  </div>
                </div>
                <div className={styles.down}>
                  <div className={styles.text}>
                    <h2><Image className={styles.Image} src='/marker.svg' width={20} height={20} alt="location_icon" />{userData.location ? userData.location : 'Not Available'}</h2>
                  </div>
                  <div className={styles.text}>
                    <h2><Image className={styles.Image} src='/link.svg' width={20} height={20} alt="location_icon" /><a href={userData.blog} target="_blank">{userData.blog ? userData.blog : 'Not Available'}</a></h2>
                  </div>
                </div>
              </div>
            </div>
          </ProfileInfo> : <div className={styles.Load}><h2>{message}</h2></div> :
        <div className={styles.Load}> <Loading /> </div>}
    </div>
  )
}