### BondSight App development plan.

## Core feature:

    1. Easy search bond
    2. Bond Recommendation
    3. Bookmarks

## Utility features

    1. Authentication
    2. Payment/Subscription

## App Design

    -Landing
        --Title and description
        --Search
            - (works for cusip, comapny name, etc)
            -if so, how to implement on api calls?
            -db cache api call data?
        --Daily recommendations
            --overview-card
                --important metrics
                    -CUSIP
                    -ISIN
                    -Uderlying
                    -lien (need to refer to api res)
                    -maturity
                    -ask yield
                    -modified duration
                    -WAM
                    -Net Debt/EBITDA
                    -EBITDA/Int
                    -Debt/Tang. Asset
                    -Calculate service of debt ladder
                --button to detail page

    -Bond Detail
        --metrics tbd
    -Bookmarks

    -Account
        -Profile
        -logout

## External Resources

    1. FMP api for dinancial data
    2. Vercel AISDK for ai recommendation hadling

## Stack

    -NextJs, ts, tailwind css
    -state management : Zustand
    -UI: Shadcn
    -validation: zod
    -ORM: Prisma
    -Form: RHF by Shadcn
    -Deployment: Vercel
    -Auth: Kinde/AuthJs
    -Payment: stripe
