import { onGetAllAccountDomains } from '@/app/actions/settings'
import ConversationMenu from '@/app/components/conversations'
import Messenger from '@/app/components/conversations/messenger'
import InfoBar from '@/app/components/infobar'
import { Separator } from '@/components/ui/separator'
import React from 'react'

type Props = {}

const ConversationPage =async (props: Props) => {
    const domains = await onGetAllAccountDomains()
  return (
    <div className="w-full h-full flex">
        <ConversationMenu domains={domains?.domains}/>
        <Separator orientation='vertical'/>
        <div className="w-full flex flex-col">
            <div className="px-5">
                <InfoBar/>
            </div>
            <Messenger/>
        </div>
    </div>
  )
}

export default ConversationPage