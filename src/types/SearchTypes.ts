import { AlbumSearchWrapper } from "./AlbumTypes"
import { ArtistSearchWrapper } from "./ArtistTypes"
import { GenresSearchWrapper } from "./GenresTypes"
import { PlaylistSearchWrapper } from "./PlaylistTypes"
import { PodcastSearchWrapper } from "./PodcastTypes"
import { TrackSearchWrapper } from "./TrackTypes"


export type MultiSearchType = {
    albums : AlbumSearchWrapper
    artists : ArtistSearchWrapper
    playlists : PlaylistSearchWrapper
    podcasts : PodcastSearchWrapper
    genres : GenresSearchWrapper
    tracks : TrackSearchWrapper
}