'use clinet'

import { useState } from 'react'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useRouter, usePathname } from 'next/navigation'

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('')

  const { data: session } = useSession()
  const pathName = usePathname()
  const router = useRouter()

  const handleProfileClick = () => {
    console.log(post)

    if (post.creator._id === session?.user.id) return router.push('/profile')

    router.push(`/profile/${post.creator._id}?name=${post.creator.userName}`)
  }

  const handleCopy = () => {
    setCopied(post.prompt)
    navigator.clipboard.writeText(post.prompt)
    setTimeout(() => setCopied(''), 3000)
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          className="cursor-pointer gap-3 flex flex-1 justify-start items-center"
          onClick={handleProfileClick}
        >
          <Image
            src={post.creator.image}
            width={40}
            height={40}
            className="rounded-full object-contain"
            alt="user_image"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-800">
              {post.creator.userName}
            </h3>
            <p className="font-inter text-sm text-gray-500">
              {post.creator.email}
            </p>
          </div>
          <div className="copy_btn" onClick={handleCopy}>
            <Image
              src={
                copied === post.prompt
                  ? '/assets/icons/tick.svg'
                  : '/assets/icons/copy.svg'
              }
              width={22}
              height={22}
            />
          </div>
        </div>
      </div>
      <p className="my-4 font-satoshi text-sm text-gray-800">{post.prompt}</p>
      <p
        className="blue_gradient cursor-pointer font-inter text-sm"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-5 border-t border-gray-200 pt-3">
          <p
            className="font-inter text-sm green_gradient   cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm orange_gradient cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  )
}
export default PromptCard
