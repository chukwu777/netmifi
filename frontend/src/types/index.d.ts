declare interface Comments {
  count: number;
  comments?: {
    readonly id: string;
    comment: string;
    isLiked: boolean;
    likes: number;
    date: string;

    commenter: {
      readonly id: string;
      username: string;
      profile: string;
      isVerified: boolean;
    };

    replies?: {
      count: number;
      replies: {
        readonly id: string;
        commentId: string;
        reply: string;
        likes: number;
        isLiked: boolean;
        date: string;
        replier: {
          id: string;
          username: string;
          profile: string;
          isVerified: boolean;
        };
        replyTo: {
          readonly id: string;
          username: string;
          profile: string;
        };
      }[];
    };
  }[];
}

declare interface Course {
  // course type-of-data for backend
  readonly id: string;
  type: "paid" | "free";
  price: number | string;
  subject: string;
  thumbnail: string;
  title: string;
  videoURL: string;
  instructorName: string;
  instructorProfileImage: string;
  instructorProfileURL: string;
  rating: number;
  reviews: number;
  isVerified: boolean;
  isFollowing: boolean;
  date: string;
}

declare interface Blog {
  readonly id: string;
  category: string;
  thumbnail: string;
  title: string;
  body: string;
  posterName: string;
  posterProfileImage: string;
  posterProfileURL: string;
  isVerified: boolean;
  isFollowing: boolean;
  isLiked: boolean;
  likes: number;
  views: number;
  comments: Comments;
  date: string;
}
declare interface PurchasedCourse {
  readonly id: string;
  title: string;
  subject: string;
  thumbnail: string;
  title: string;
  progress: number;
  instructorName: string;
  instructorProfileImage: string;
  instructorProfileURL: string;
  rating: number;
  userRating: number;
  isVerified: boolean;
  isFollowing: boolean;
  isFavorite: boolean;
  collection?: never[] | string[];
  date: string;
}

declare interface Instructor {
  readonly id: string;
  name: string;
  area: string,
  profile?: string | null,
  courses: number,
  students: number,
  certificates: number
  averageRating: number,
  isFollowing: boolean,
  isVerified: boolean,
  date: '3 months ago'
}
declare interface WindowSize {
  width: number | undefined;
  height: number | undefined;
}

declare interface NavLinks {
  href: string;
  label: string;
  icon: IconType;
  onlyUser: boolean;
  onlyGuest: boolean;
  onlySmallScreen: boolean;
}

declare interface PageProps {
  className: string;
}

declare interface LoaderProps {
  className?: string;
  type: "text" | "loader" | "all";
  size?: number;
}

declare interface CoursesJumbotronProps {
  title: string;
  thumbnail: string;
  exploreSectionRef: React.Ref<HTMLElement>;
}

declare interface CoursesCardProps extends Course {
  className?: string;
  course: Course;
}

declare interface CourseCarouselProps {
  title: string;
  link?: string;
  data: Course[];
}
declare interface InstructorCarouselProps {
  title: string;
  link?: string;
  data: Instructor[];
}

declare interface PostAvatarProps {
  profileImage?: string;
  profileImageClassName?: ClassValue;
  profileName: string;
  profileURL: string;
  description?: string;
  isVerified: boolean;
  onlyAvatar?: boolean;
}
declare interface BlogCardProps extends Blog {
  className?: string;
}

declare interface BlogCarouselProps {
  title: string;
  link?: string;
  data: Blog[];
}

declare interface LayoutPageProps {
  className?: string;
  page: "child" | "self";
}

declare interface SelfPageLayoutProps {
  className: string | undefined;
  title: string;
  data: (Blog & Course)[];
  type: 'blog' | 'course'
}

declare interface CustomFormFieldProps {
  control: Control<z.infer<typeof formSchema>>;
  name: FieldPath<z.infer<typeof formSchema>>;
  type?: 'textarea' | 'input',
  textareaType?: 'comment' | 'normal';
  placeholder?: string;
  isPasswordVisible?: boolean;
  inputType?: React.HTMLInputTypeAttribute;
  label?: string;
  isNotLabeled?: boolean;
  defaultValue?: string | number;
  value?: string | number;
  disabled?: boolean;
  hidden?: boolean;
  readOnly?: boolean;
}

declare interface CommentTemplateProps {
  page: "blog" | "course";
  id: string;
  comment: string;
  likes: number;
  date: string;
  user: {
    readonly id: string;
    username: string;
    profile: string;
    isVerified: boolean;
  };
}
declare interface CommentProps {
  page: "blog" | "course";
  postId: string;
  comment: {
    readonly id: string;
    comment: string;
    isLiked: boolean;
    likes: number;
    date: string;

    commenter: {
      readonly id: string;
      username: string;
      profile: string;
      isVerified: boolean;
    };

    replies?: {
      count: number;
      replies: {
        readonly id: string;
        commentId: string;
        reply: string;
        likes: number;
        isLiked: boolean;
        date: string;
        replier: {
          id: string;
          username: string;
          profile: string;
          isVerified: boolean;
        };
        replyTo: {
          readonly id: string;
          username: string;
          profile: string;
        };
      }[];
    };
  };
}

declare interface ReplyProps {
  page: "blog" | "course";
  postId: string;
  commentId: string;
  reply: {
    readonly id: string;
    commentId: string;
    reply: string;
    likes: number;
    isLiked: boolean;
    date: string;
    replier: {
      id: string;
      username: string;
      profile: string;
      isVerified: boolean;
    };
    replyTo: {
      readonly id: string;
      username: string;
      profile: string;
    };
  };
}
declare interface CommentBoxProps {
  page: "blog" | "course";
  state: "comment" | "reply";
  postId: string;
  commentId?: string;
  replyTo?: string;
}

declare interface CommentOptionsProps {
  page: "blog" | "course";
  postId: string;
  isLiked: boolean;
  likes: number;
  commentId: string;
  replyTo: string;
  isReply: boolean;
}


declare interface JumbotronProps {
  className?: string;
  image: string;
  imageClassName?: ClassValue;
  title: string;
  titleClassName?: ClassValue;
  body?: string;
  bodyClassName?: ClassValue,
  button?: JSX.Element;
}

// declare interface ReactPlayerProps extends {}
declare interface VideoPlayerProps {
  className?: string;
  thumbnail: string;
  videoUrl?: string;
  videoCollection?: string[];
  currentCourseVideo?: string;
  setCurrentCourseVideo?: React.Dispatch<React.SetStateAction<string>>;
}

declare interface PlayerTooltipProps {
  hoverLabel: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled?: boolean;
}

declare interface CustomElementClickProps {
  children: React.ReactNode;
  className?: ClassValue;
  handleSingleClick?: () => void;
  handleDoubleClick?: () => void;
}

declare interface ReviewCardProps {
  className: string;
  name: string; profile: string;
  isVerified: boolean;
  profileUrl?: string;
  review: string;
  rating: number
}

type RatingTranslation = (
  "no rating" | //0
  "very poor" | // 0.5
  "poor" | // 1
  "fair" | // 1.5
  "good" | // 2
  "very good" | //2.5
  "average" | // 3
  "excellent" | // 3.5
  "outstanding" | // 4
  "phenomenal" | // 4,5
  "perfect" // 5
)

declare interface RateDialogProps {
  child: React.ReactNode;
}

declare interface MyCourseCardProps {
  className?: ClassValue;
  type: 'on-page' | 'self-page';
  course: PurchasedCourse;
}

declare interface MyCourseCarouselProps {
  className?: ClassValue;
  data: PurchasedCourse[];
}
declare interface InstructorCardProps {
  className?: ClassValue;
  instructor: Instructor;
}

declare interface ShareComponentProps {
  child: React.ReactNode;
  url: string;
  title?: string;
  text?: string;
  files?: File[]
}