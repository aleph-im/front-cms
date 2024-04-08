import { Button, TextInput, useResponsiveMin } from '@aleph-front/core'

const SignMeUpButton = () => (
  <Button
    type="submit"
    value="Subscribe"
    name="subscribe"
    id="mc-embedded-subscribe"
    color="main0"
    kind="gradient"
    size="lg"
    variant="primary"
    tw="!block !mx-auto"
  >
    Sign up
  </Button>
)

export const SignMeUpForm = () => {
  const isDesktop = useResponsiveMin('md')

  return (
    <form
      action="https://aleph.us17.list-manage.com/subscribe/post?u=40af570491d53f28c5ae6f1ab&amp;id=4850a3195f"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      rel="noopener noreferrer"
      noValidate
    >
      <div tw="mb-4 w-full">
        <div
          style={{ position: 'absolute', left: '-4500px' }}
          aria-hidden="true"
        >
          <input
            type="text"
            name="b_40af570491d53f28c5ae6f1ab_4850a3195f"
            tabIndex={-1}
            defaultValue=""
          />
        </div>
        {isDesktop ? (
          <TextInput
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
            buttonStyle="stuck"
            button={<SignMeUpButton />}
            tw="w-[24rem] max-w-full"
          />
        ) : (
          <TextInput
            type="email"
            defaultValue=""
            name="EMAIL"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />
        )}
      </div>
      {!isDesktop && <SignMeUpButton />}
    </form>
  )
}

export default SignMeUpForm
