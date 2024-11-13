import InfoBar from '@/app/components/infobar'
import BillingSetting from '@/app/components/settings/billing-setting'
import DarkModetoggle from '@/app/components/settings/dark-mode'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <InfoBar/>
      <div className="overflow-y-auto w-full chat-window flex-1 h-0 flex flex-col gap-10">
        <BillingSetting/>
        <DarkModetoggle/>
      </div>
    </>
  )
}

export default page