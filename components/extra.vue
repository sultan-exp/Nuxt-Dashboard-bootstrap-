<div v-for="(column, index) in columns" :key="index" class="task-column">
          <p>{{ column.title }}</p>
          <p>
            {{ column.date.getUTCDate() + " " + month[column.date.getMonth()] }}
          </p>
          <draggable
            :id="
              column.date.getFullYear() +
              '-' +
              (column.date.getMonth() < 10 ? 0 : '') +
              (column.date.getMonth() + 1) +
              '-' +
              column.date.getUTCDate()
            "
            @end="updateTaskDrop"
            :list="
              tasks.filter(
                filterDateTasks.bind(
                  this,
                  column.date.getFullYear() +
                    '-' +
                    column.date.getMonth() +
                    '-' +
                    column.date.getUTCDate()
                )
              )
            "
            :animation="200"
            ghost-class="ghost-card"
            group="tasks.filter(filterDateTasks.bind(this, column.date.getFullYear() + '-' +column.date.getMonth() + '-' +column.date.getUTCDate()))"
          >
            <task-card
              v-for="task in tasks.filter(
                filterDateTasks.bind(
                  this,
                  column.date.getFullYear() +
                    '-' +
                    column.date.getMonth() +
                    '-' +
                    column.date.getUTCDate()
                )
              )"
              :key="task.id"
              :task="task"
              :id="task.id"
            ></task-card>
          </draggable>
        </div>
