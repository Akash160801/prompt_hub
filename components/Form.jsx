import Link from 'next/link'

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc">
        {type} and share amazing prompts with the world, and let your
        imagination turn wild with any AI-powered platform.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl flex flex-col glassmorphism mt-10 gap-7"
      >
        <label>
          <span className="font-satoshi font-semibold text-gray-500 text-base">
            Your AI prompt
          </span>
          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-gray-500 text-base">
            Tag{' '}
            <span className="font-normal">
              (#webdevelopment,#idea,#product,#robotics)
            </span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="tag"
            required
            className="form_input"
          />
        </label>
        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 ">
            Cancel
          </Link>
          <button className="bg-blue-500 hover:text-blue-400 hover:bg-transparent rounded-full text-white px-5 py-2">
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}
export default Form
