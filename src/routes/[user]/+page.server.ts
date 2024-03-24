type User = {
    joinedClassroomIds: string[]
    streak: number
    motivation: string
    acquisitionSurveyReason: string
    shouldForceConnectPhoneNumber: boolean
    picture: string
    learningLanguage: string
    hasFacebookId: boolean
    shakeToReportEnabled: boolean | null
    liveOpsFeatures: unknown[]
    canUseModerationTools: boolean
    id: number
    betaStatus: string
    hasGoogleId: boolean
    privacySettings: string[]
    fromLanguage: string
    hasRecentActivity15: boolean
    _achievements: unknown[]
    observedClassroomIds: string[]
    username: string
    bio: string
    profileCountry: string | null
    chinaUserModerationRecords: unknown[]
    globalAmbassadorStatus: unknown
    currentCourseId: string
    hasPhoneNumber: boolean
    creationDate: number
    achievements: unknown[] // Assuming it's an array of some type
    hasPlus: boolean
    name: string
    roles: string[]
    classroomLeaderboardsEnabled: boolean
    emailVerified: boolean
    courses: {
        preload: boolean
        placementTestAvailable: boolean
        authorId: string
        title: string
        learningLanguage: string
        xp: number
        healthEnabled: boolean
        fromLanguage: string
        crowns: number
        id: string
    }[]
    totalXp: number
    streakData: {
        currentStreak: {
            startDate: string
            length: number
            endDate: string
        }
    }
}

// const LEADERBOARDS_BASE_URL = "https://duolingo-leaderboards-prod.duolingo.com/leaderboards/7d9f5dd1-8423-491a-91f2-2532052038ce"

const BASE_URL = "https://www.duolingo.com/2017-06-30"

const getProfile = async (username: string) => {
    const request = new Request(`${BASE_URL}/users?username=${username}`, {
        headers: {
            'Accept': 'application/json',
            'User-Agent': 'sean-bot'
        }
    })

    const response = await fetch(request)

    const { users } = await response.json() as Record<'users', User[]>

    const [user] = users

    return user
}


export const load = async ({ params }) => {

    return await getProfile(params.user)
}