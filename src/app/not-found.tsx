import Bounded from "@/components/Bounded"
import Heading from "@/components/Heading"

export default function Custom404() {
  return (
    <Bounded>
      <Heading>
        404 - Page not found
      </Heading>
      <div className="prose prose-xl prose-invert my-10">
        <p>
          It looks like something went wrong. The page you were looking for doesn't exist.
        </p>
      </div>
    </Bounded>
  )
}