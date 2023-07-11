import { connectToDB } from '@utils/database'
import Prompt from '@models/prompt'

export const POST = async (request) => {
  const { userId, prompt, tag } = await request.json()

  try {
    await connectToDB() // this is a lambda function ,means it will die everytime it has completed its job.
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    })

    await newPrompt.save()
    return new Response(JSON.stringify(newPrompt), { status: 201 }) // status 201 means : we have created
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 }) // status 500 means server error.
  }
}
