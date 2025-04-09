import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class MissionService {

  // Observable string sources
  private readonly missionAnnouncedSource = new Subject<string>();
  private readonly missionConfirmedSource = new Subject<string>();

  // Observable string streams
  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  missionConfirmed$ = this.missionConfirmedSource.asObservable();

  announceMission(mission: string) {
    this.missionAnnouncedSource.next(mission);
  }

  confirmMission(astronaut: string) {
    this.missionConfirmedSource.next(astronaut);
  }
}
