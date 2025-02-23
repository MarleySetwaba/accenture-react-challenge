import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  const brand_sort = url.searchParams.get("brand_sort")
  const published = url.searchParams.get("published")

  if(brand_sort && published){
    return NextResponse.next()
  }

  url.searchParams.set("brand_sort", "asc")
  url.searchParams.set("published", "true")

  return NextResponse.redirect(url)
}
 
//
export const config = {
  matcher: '/',
}